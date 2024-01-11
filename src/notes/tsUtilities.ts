// keyof, omit, pick
type Vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
}

type VowelsInEnglish = keyof Vowels;
// a | e | i | o | u

type VowelsInYunting = Pick<Vowels, 'i' | 'u'>;
type VowelsNotInYunting = Omit<Vowels, 'i'|'u'>;

const favouriteVowels: keyof VowelsInYunting = 'i'

export {}