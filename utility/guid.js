var lut = [],
    i = 0;

for (; i<256; i++) {
    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
/**
 * Fast GUID generator, RFC4122 version 4 compliant.
 *
 * **File:** [utility/guid.js](utility/guid.js)
 *
 * @member module:Protean.guid
 * @function
 * @returns {String}
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @see http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
module.exports = function guid () {
    var d0 = Math.random() * 0xffffffff | 0,
        d1 = Math.random() * 0xffffffff | 0,
        d2 = Math.random() * 0xffffffff | 0,
        d3 = Math.random() * 0xffffffff | 0;

    return lut[d0 & 0xff] +
        lut[d0 >> 8 & 0xff] +
        lut[d0 >> 16 & 0xff] +
        lut[d0 >> 24 & 0xff] +
        '-' +
        lut[d1 & 0xff] +
        lut[d1 >> 8 & 0xff] +
        '-' +
        lut[d1 >> 16 & 0x0f | 0x40] +
        lut[d1 >> 24 & 0xff] +
        '-' +
        lut[d2 & 0x3f | 0x80] +
        lut[d2 >> 8 & 0xff] +
        '-' +
        lut[d2 >> 16 & 0xff] +
        lut[d2 >> 24 & 0xff] +
        lut[d3 & 0xff] +
        lut[d3 >> 8 & 0xff] +
        lut[d3 >> 16 & 0xff] +
        lut[d3 >> 24 & 0xff];
};
