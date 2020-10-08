"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MARKETS = exports.TOKEN_MINTS = exports.getLayoutVersion = void 0;
const token_instructions_1 = require("./token-instructions");
const web3_js_1 = require("@solana/web3.js");
function getLayoutVersion(programId) {
    if (programId.equals(new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn')) ||
        programId.equals(new web3_js_1.PublicKey('BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg'))) {
        return 1;
    }
    return 2;
}
exports.getLayoutVersion = getLayoutVersion;
exports.TOKEN_MINTS = [
    {
        address: new web3_js_1.PublicKey('9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E'),
        name: 'BTC',
    },
    {
        address: new web3_js_1.PublicKey('2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk'),
        name: 'ETH',
    },
    {
        address: new web3_js_1.PublicKey('AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3'),
        name: 'FTT',
    },
    {
        address: new web3_js_1.PublicKey('3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB'),
        name: 'YFI',
    },
    {
        address: new web3_js_1.PublicKey('CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG'),
        name: 'LINK',
    },
    {
        address: new web3_js_1.PublicKey('Ga2AXHpfAF6mv2ekZwcsJFqu7wB4NV331qNH7fW9Nst8'),
        name: 'XRP',
    },
    {
        address: new web3_js_1.PublicKey('BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4'),
        name: 'USDT',
    },
    {
        address: new web3_js_1.PublicKey('BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW'),
        name: 'USDC',
    },
    {
        address: token_instructions_1.MSRM_MINT,
        name: 'MSRM',
    },
    {
        address: token_instructions_1.SRM_MINT,
        name: 'SRM',
    },
    {
        address: new web3_js_1.PublicKey('AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy'),
        name: 'SUSHI',
    },
    {
        address: new web3_js_1.PublicKey('SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX'),
        name: 'SXP',
    },
    {
        address: new web3_js_1.PublicKey('CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K'),
        name: 'ALEPH',
    },
    {
        address: new web3_js_1.PublicKey('BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN'),
        name: 'HGET',
    },
    {
        address: new web3_js_1.PublicKey('5Fu5UUgbjpUvdBveb3a1JTNirL8rXtiYeSMWvKjtUNQv'),
        name: 'CREAM',
    },
    {
        address: new web3_js_1.PublicKey('873KLxCbz7s9Kc4ZzgYRtNmhfkQrhfyWGZJBmyCbC3ei'),
        name: 'UBXT',
    },
    {
        address: new web3_js_1.PublicKey('HqB7uswoVg4suaQiDP3wjxob1G5WdZ144zhdStwMCq7e'),
        name: 'HNT',
    },
    {
        address: new web3_js_1.PublicKey('9S4t2NEAiJVMvPdRYKVrfJpBafPBLtvbvyS3DecojQHw'),
        name: 'FRONT',
    },
    {
        address: new web3_js_1.PublicKey('6WNVCuxCGJzNjmMZoKyhZJwvJ5tYpsLyAtagzYASqBoF'),
        name: 'AKRO',
    },
    {
        address: new web3_js_1.PublicKey('DJafV9qemGp7mLMEn5wrfqaFwxsbLgUsGVS16zKRk9kc'),
        name: 'HXRO',
    },
    {
        address: new web3_js_1.PublicKey('DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw'),
        name: 'UNI',
    },
    { address: token_instructions_1.WRAPPED_SOL_MINT, name: 'SOL' },
];
exports.MARKETS = [
    {
        address: new web3_js_1.PublicKey('EmCzMQfXMgNHcnRoFwAdPe1i2SuiSzMj1mx6wu3KN2uA'),
        name: 'ALEPH/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('B37pZmwrwXHjpgvd9hHDAx1yeDsNevTnbbrN9W12BoGK'),
        name: 'ALEPH/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('8AcVjMG2LTbpkjNoyq8RwysokqZunkjy3d5JDzxC6BJa'),
        name: 'BTC/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('CAgAeMD7quTdnr6RPa7JySQpjf3irAmefYNdTb6anemq'),
        name: 'BTC/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('HfCZdJ1wfsWKfYP2qyWdXTT5PWAGWFctzFjLH48U1Hsd'),
        name: 'ETH/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('ASKiV944nKg1W9vsf7hf3fTsjawK6DwLwrnB2LH9n61c'),
        name: 'ETH/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('8mDuvJJSgoodovMRYArtVVYBbixWYdGzR47GPrRT65YJ'),
        name: 'SOL/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg'),
    },
    {
        address: new web3_js_1.PublicKey('Cdp72gDcYMCLLk3aDkPxjeiirKoFqK38ECm8Ywvk94Wi'),
        name: 'SOL/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg'),
    },
    {
        address: new web3_js_1.PublicKey('HARFLhSq8nECZk4DVFKvzqXMNMA9a3hjvridGMFizeLa'),
        name: 'SRM/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('68J6nkWToik6oM9rTatKSR5ibVSykAtzftBUEAvpRsys'),
        name: 'SRM/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('DzFjazak6EKHnaB2w6qSsArnj28CV1TKd2Smcj9fqtHW'),
        name: 'SUSHI/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('9wDmxsfwaDb2ysmZpBLzxKzoWrF1zHzBN7PV5EmJe19R'),
        name: 'SUSHI/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('GuvWMATdEV6DExWnXncPYEzn4ePWYkvGdC8pu8gsn7m7'),
        name: 'SXP/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('GbQSffne1NcJbS4jsewZEpRGYVR4RNnuVUN8Ht6vAGb6'),
        name: 'SXP/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('H4snTKK9adiU15gP22ErfZYtro3aqR9BTMXiH3AwiUTQ'),
        name: 'MSRM/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('7kgkDyW7dmyMeP8KFXzbcUZz1R2WHsovDZ7n3ihZuNDS'),
        name: 'MSRM/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('DHDdghmkBhEpReno3tbzBPtsxCt6P3KrMzZvxavTktJt'),
        name: 'FTT/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('FZqrBXz7ADGsmDf1TM9YgysPUfvtG8rJiNUrqDpHc9Au'),
        name: 'FTT/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('5zu5bTZZvqESAAgFsr12CUMxdQvMrvU9CgvC1GW8vJdf'),
        name: 'YFI/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('FJg9FUtbN3fg3YFbMCFiZKjGh5Bn4gtzxZmtxFzmz9kT'),
        name: 'YFI/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('F5xschQBMpu1gD2q1babYEAVJHR1buj1YazLiXyQNqSW'),
        name: 'LINK/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('7GZ59DMgJ7D6dfoJTpszPayTRyua9jwcaGJXaRMMF1my'),
        name: 'LINK/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('BAbc9baz4hV1hnYjWSJ6cZDRjfvziWbYGQu9UFkcdUmx'),
        name: 'HGET/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('uPNcBgFhrLW3FtvyYYbBUi53BBEQf9e4NPgwxaLu5Hn'),
        name: 'HGET/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('3puWJFZyCso14EdxhywjD7xqyTarpsULx483mzvqxQRW'),
        name: 'CREAM/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('EBxJWA2nLV57ZntbjizxH527ZjPNLT5cpUHMnY5k3oq'),
        name: 'CREAM/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('8Ae7Uhigx8k4fKdJG7irdPCVDZLvWsJfeTH2t5fr3TVD'),
        name: 'UBXT/USDC',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('46VdEkj4MJwZinwVb3Y7DUDpVXLNb9YW7P2waKU3vCqr'),
        name: 'UBXT/USDT',
        deprecated: true,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('Hze5AUX4Qp1cTujiJ4CsAMRGn4g6ZpgXsmptFn3xxhWg'),
        deprecated: true,
        name: 'HNT/USDC',
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('Hc22rHKrhbrZBaQMmhJvPTkp1yDr31PDusU8wKoqFSZV'),
        deprecated: true,
        name: 'HNT/USDT',
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('FJq4HX3bUSgF3yQZ8ADALtJYfAyr9fz36SNG18hc3dgF'),
        deprecated: true,
        name: 'FRONT/USDC',
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('HFoca5HKwiTPpw9iUY5iXWqzkXdu88dS7YrpSvt2uhyF'),
        deprecated: true,
        name: 'FRONT/USDT',
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        name: 'ALEPH/USDT',
        address: new web3_js_1.PublicKey('5xnYnWca2bFwC6cPufpdsCbDJhMjYCC59YgwoZHEfiee'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'ALEPH/USDC',
        address: new web3_js_1.PublicKey('BZMuoQ2i2noNUXMdrRDivc7MwjGspNJTCfZkdHMwK18T'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'BTC/USDT',
        address: new web3_js_1.PublicKey('EXnGBBSamqzd3uxEdRLUiYzjJkTwQyorAaFXdfteuGXe'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'BTC/USDC',
        address: new web3_js_1.PublicKey('5LgJphS6D5zXwUVPU7eCryDBkyta3AidrJ5vjNU6BcGW'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'ETH/USDT',
        address: new web3_js_1.PublicKey('5abZGhrELnUnfM9ZUnvK6XJPoBU5eShZwfFPkdhAC7o'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'ETH/USDC',
        address: new web3_js_1.PublicKey('DmEDKZPXXkWgaYiKgWws2ZXWWKCh41eryDPRVD4zKnD9'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SOL/USDT',
        address: new web3_js_1.PublicKey('7xLk17EQQ5KLDLDe44wCmupJKJjTGd8hs3eSVVhCx932'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SOL/USDC',
        address: new web3_js_1.PublicKey('EBFTQNg2QjyxV7WDDenoLbfLLXLcbSz6w1YrdTCGPWT5'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SRM/USDT',
        address: new web3_js_1.PublicKey('H3APNWA8bZW2gLMSq5sRL41JSMmEJ648AqoEdDgLcdvB'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SRM/USDC',
        address: new web3_js_1.PublicKey('8YmQZRXGizZXYPCDmxgjwB8X8XN4PZG7MMwNg76iAmPZ'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SUSHI/USDT',
        address: new web3_js_1.PublicKey('4uZTPc72sCDcVRfKKii67dTPm2Xe4ri3TYnGcUQrtnU9'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SUSHI/USDC',
        address: new web3_js_1.PublicKey('9vFuX2BizwinWjkZLQTmThDcNMFEcY3wVXYuqnRQtcD'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SXP/USDT',
        address: new web3_js_1.PublicKey('33GHmwG9woY95JuWNi74Aa8uKvysSXxif9P1EwwkrCRz'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'SXP/USDC',
        address: new web3_js_1.PublicKey('C5NReXAeQhfjiDCGPFj1UUmDxDqF8v2CUVKoYuQqb4eW'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'MSRM/USDT',
        address: new web3_js_1.PublicKey('FUaF58sDrgbqakHTR8RUwRLauSofRTjqyCsqThFPh6YM'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'MSRM/USDC',
        address: new web3_js_1.PublicKey('58H7ZRmiyWtsrz2sQGz1qQCMW6n7447xhNNehUSQGPj5'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'FTT/USDT',
        address: new web3_js_1.PublicKey('5NqjQVXLuLSDnsnQMfWp3rF9gbWDusWG4B1Xwtk3rZ5S'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'FTT/USDC',
        address: new web3_js_1.PublicKey('ES8skmkEeyH1BYFThd2FtyaFKhkqtwH7XWp8mXptv3vg'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'YFI/USDT',
        address: new web3_js_1.PublicKey('97NiXHUNkpYd1eb2HthSDGhaPfepuqMAV3QsZhAgb1wm'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'YFI/USDC',
        address: new web3_js_1.PublicKey('Gw78CYLLFbgmmn4rps9KoPAnNtBQ2S1foL2Mn6Z5ZHYB'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'LINK/USDT',
        address: new web3_js_1.PublicKey('hBswhpNyz4m5nt4KwtCA7jYXvh7VmyZ4TuuPmpaKQb1'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'LINK/USDC',
        address: new web3_js_1.PublicKey('WjfsTPyrvUUrhGJ9hVQFubMnKDcnQS8VxSXU7L2gLcA'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HGET/USDT',
        address: new web3_js_1.PublicKey('GaeUpY7CT8rjoeVGjY1t3mJJDd1bdXxYWtrGSpsVFors'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HGET/USDC',
        address: new web3_js_1.PublicKey('2ZmB255T4FVUugpeXTFxD6Yz5GE47yTByYvqSTDUbk3G'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'CREAM/USDC',
        address: new web3_js_1.PublicKey('FGJtCDXoHLHjagP5Ht6xcUFt2rW3z8MJPe87rFKP2ZW6'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'CREAM/USDT',
        address: new web3_js_1.PublicKey('7qq9BABQvTWKZuJ5fX2PeTKX6XVtduEs9zW9WS21fSzN'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'UBXT/USDC',
        address: new web3_js_1.PublicKey('7K6MPog6LskZmyaYwqtLvRUuedoiE68nirbQ9tK3LasE'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'UBXT/USDT',
        address: new web3_js_1.PublicKey('DCHvVahuLTNWBGUtEzF5GrTdx5FRpxqEJiS6Ru1hrDfD'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HNT/USDC',
        address: new web3_js_1.PublicKey('9RyozJe3bkAFfH3jmoiKHjkWCoLTxn7aBQSi6YfaV6ab'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HNT/USDT',
        address: new web3_js_1.PublicKey('DWjJ8VHdGYBxDQYdrRBVDWkHswrgjuBFEv5pBhiRoPBz'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'FRONT/USDC',
        address: new web3_js_1.PublicKey('AGtBbGuJZiv3Ko3dfT4v6g4kCqnNc9DXfoGLe5HpjmWx'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'FRONT/USDT',
        address: new web3_js_1.PublicKey('56eqxJYzPigm4FkigiBdsfebjMgAbKNh24E7oiKLBtye'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'AKRO/USDC',
        address: new web3_js_1.PublicKey('AA1HSrsMcRNzjaQfRMTNarHR9B7e4U79LJ2319UtiqPF'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'AKRO/USDT',
        address: new web3_js_1.PublicKey('FQbCNSVH3RgosCPB4CJRstkLh5hXkvuXzAjQzT11oMYo'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HXRO/USDT',
        address: new web3_js_1.PublicKey('Fs5xtGUmJTYo8Ao75M3R3m3mVX53KMUhzfXCmyRLnp2P'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'HXRO/USDC',
        address: new web3_js_1.PublicKey('AUAobJdffexcoJBMeyLorpShu3ZtG9VvPEPjoeTN4u5Z'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'UNI/USDT',
        address: new web3_js_1.PublicKey('ChKV7mxecPqFPGYJjhzowPHDiLKFWXXVujUiE3EWxFcg'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
    {
        name: 'UNI/USDC',
        address: new web3_js_1.PublicKey('GpdYLFbKHeSeDGqsnQ4jnP7D1294iBpQcsN1VPwhoaFS'),
        programId: new web3_js_1.PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
        deprecated: false,
    },
];
//# sourceMappingURL=tokens_and_markets.js.map