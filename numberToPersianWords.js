function numberToPersianWords(num) {
    const ones = ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
    const tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
    const hundreds = ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
    const thousands = ['هزار', 'میلیون', 'میلیارد', 'تریلیون'];

    if (num === 0) return ones[0];

    let word = '';
    let chunkWord = '';
    let chunkCount = 0;

    do {
        let remainder = num % 1000;
        num = Math.floor(num / 1000);

        if (remainder > 0) {
            chunkWord = '';
            const hundredsDigit = Math.floor(remainder / 100);
            const tensAndOnes = remainder % 100;

            if (hundredsDigit > 0) {
                chunkWord += hundreds[hundredsDigit];
            }

            if (tensAndOnes > 0) {
                if (chunkWord !== '') {
                    chunkWord += ' و ';
                }
                if (tensAndOnes < 20) {
                    chunkWord += ones[tensAndOnes];
                } else {
                    const tensDigit = Math.floor(tensAndOnes / 10);
                    const onesDigit = tensAndOnes % 10;

                    chunkWord += tens[tensDigit];
                    if (onesDigit > 0) {
                        chunkWord += ' و ' + ones[onesDigit];
                    }
                }
            }

            if (chunkCount > 0 && remainder > 0) {
                chunkWord += ' ' + thousands[chunkCount - 1];
            }

            if (word !== '') {
                word = chunkWord + ' و ' + word;
            } else {
                word = chunkWord;
            }
        }

        chunkCount++;
    } while (num > 0);

    return word.trim();
}
