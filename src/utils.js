export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

export const rgbToHex = (color) => {
  var hexR = color?.r?.toString(16);
  var hexG = color?.g?.toString(16);
  var hexB = color?.b?.toString(16);
  const leadingZero = (val) => (val?.length === 1 ? "0" + val : val);
  return `#${leadingZero(hexR)}${leadingZero(hexG)}${leadingZero(hexB)}`;
};

const dist = (c1, c2) => {
  const xyzC1 = RGBtoXYZ(c1.r, c1.g, c1.b);
  const lab1 = XYZtoLAB(xyzC1[0], xyzC1[1], xyzC1[2]);
  const xyzC2 = RGBtoXYZ(c2.r, c2.g, c2.b);
  const lab2 = XYZtoLAB(xyzC2[0], xyzC2[1], xyzC2[2]);
  return deltaE(lab1, lab2);
};

export const randomColorRgb = () => {
  const max = 255;
  const min = 0;
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);

  return { r, g, b };
};

export const distPercentage = (c1, c2) => 100 - dist(c1, c2);

/**
 * calculate the perceptual distance between colors in CIELAB
 * https://github.com/THEjoezack/ColorMine/blob/master/ColorMine/ColorSpaces/Comparisons/Cie94Comparison.cs
 *
 * @param {Array} labA First LAB color in array
 * @param {Array} labB Second LAB color in array
 */
function deltaE(labA, labB) {
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / 1.0;
  var deltaCkcsc = deltaC / sc;
  var deltaHkhsh = deltaH / sh;
  var i =
    deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

function RGBtoXYZ(R, G, B) {
  let var_R = parseFloat(R / 255); //R from 0 to 255
  let var_G = parseFloat(G / 255); //G from 0 to 255
  let var_B = parseFloat(B / 255); //B from 0 to 255

  if (var_R > 0.04045) {
    var_R = Math.pow((var_R + 0.055) / 1.055, 2.4);
  } else {
    var_R = var_R / 12.92;
  }
  if (var_G > 0.04045) {
    var_G = Math.pow((var_G + 0.055) / 1.055, 2.4);
  } else {
    var_G = var_G / 12.92;
  }

  if (var_B > 0.04045) {
    var_B = Math.pow((var_B + 0.055) / 1.055, 2.4);
  } else {
    var_B = var_B / 12.92;
  }

  var_R = var_R * 100;
  var_G = var_G * 100;
  var_B = var_B * 100;

  //Observer. = 2°, Illuminant = D65
  const X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
  const Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
  const Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;

  return [X, Y, Z];
}

function XYZtoLAB(x, y, z) {
  var ref_X = 95.047;
  var ref_Y = 100.0;
  var ref_Z = 108.883;

  let var_X = x / ref_X; //ref_X =  95.047   Observer= 2°, Illuminant= D65
  let var_Y = y / ref_Y; //ref_Y = 100.000
  let var_Z = z / ref_Z; //ref_Z = 108.883

  if (var_X > 0.008856) {
    var_X = Math.pow(var_X, 1 / 3);
  } else {
    var_X = 7.787 * var_X + 16 / 116;
  }
  if (var_Y > 0.008856) {
    var_Y = Math.pow(var_Y, 1 / 3);
  } else {
    var_Y = 7.787 * var_Y + 16 / 116;
  }

  if (var_Z > 0.008856) {
    var_Z = Math.pow(var_Z, 1 / 3);
  } else {
    var_Z = 7.787 * var_Z + 16 / 116;
  }

  const CIE_L = 116 * var_Y - 16;
  const CIE_a = 500 * (var_X - var_Y);
  const CIE_b = 200 * (var_Y - var_Z);

  return [CIE_L, CIE_a, CIE_b];
}

export const getBrightness = ({ r, g, b }) =>
  (r * 299 + g * 587 + b * 114) / 1000;
