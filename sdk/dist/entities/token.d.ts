import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  )
}