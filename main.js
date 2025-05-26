export class Tckn {
    static generatedNumber;
    
    static validate(tckn) {
        if (tckn === null || tckn.length !== 11 || !/^\d+$/.test(tckn)) return false;
        const digits = Array.from(tckn).map(c => parseInt(c, 10));
        const oddSum = digits.filter((_, i) => i % 2 === 1 && i < 9).reduce((a, b) => a + b, 0);
        const evenSum = digits.filter((_, i) => i % 2 === 0 && i < 9).reduce((a, b) => a + b, 0);
        return ((evenSum * 7) - oddSum) % 10 === digits[9] && digits.slice(0, 10).reduce((a, b) => a + b, 0) % 10 === digits[10];
    }

    static generate() {
        const tckn = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
        const list = Array.from(String(tckn), Number);
        const oddSum = list[0] + list[2] + list[4] + list[6] + list[8];
        const evenSum = list[1] + list[3] + list[5] + list[7];
        const tc10 = ((7 * oddSum) - evenSum) % 10;
        Tckn.generatedNumber = tckn.toString() + tc10.toString() + ((evenSum + oddSum + tc10) % 10).toString();
        return Tckn.generatedNumber;
    }
}