import {
  getCurrencyFormattedNumber,
  isInt,
  scrubFormatting,
  getFormattedNumber,
} from './numberFormat'
import { expect } from 'chai'
describe('Number Formatter', () => {
  describe('getCurrencyFormattedNumber', () => {
    it('returns $5.50 when passed 5.5', () => {
      expect(getCurrencyFormattedNumber(5.5)).to.equal('$5.50')
    })
  })

  describe('isInt', () => {
    it('returns true when passed 0', () => {
      expect(isInt(0)).to.equal(true)
    })

    it('returns false when passed an empty string', () => {
      expect(isInt('')).to.equal(false)
    })

    it('returns true when passed int as a string', () => {
      expect(isInt('5')).to.equal(true)
    })
  })

  describe('scrubFormatting', () => {
    it('strips commas and decimals', () => {
      expect(scrubFormatting('1,234.56')).to.equal('123456')
    })
  })

  describe('getFormattedNumber', () => {
    it('returns 0 if passed 0', () => {
      expect(getFormattedNumber(0)).to.equal(0)
    })

    it('returns empty string if passed empty string', () => {
      expect(getFormattedNumber('')).to.equal('')
    })
  })
})
