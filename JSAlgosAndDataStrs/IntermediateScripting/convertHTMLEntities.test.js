const convertHTML = require('./convertHTMLEntities')

describe('Intermediate Algorithm Scripting: Convert HTML Entities', () => {
  test('convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".', () => {
    expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana')
  })

  test('convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos"', () => {
    expect(convertHTML(convertHTML('Hamburgers < Pizza < Tacos'))).toBe(
      'Hamburgers &lt; Pizza &lt; Tacos'
    )
  })

  test('convertHTML("Sixty > twelve") should return "Sixty &gt; twelve"', () => {
    expect(convertHTML('Sixty > twelve')).toBe('Sixty &gt; twelve')
  })

  test(`convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".`, () => {
    expect(convertHTML('Stuff in "quotation marks"')).toBe(
      'Stuff in &quot;quotation marks&quot;'
    )
  })

  test(`convertHTML("Schindler's List") should return "Schindler&apos;s List".`, () => {
    expect(convertHTML("Schindler's List")).toBe('Schindler&apos;s List')
  })

  test('convertHTML("<>") should return "&lt;&gt;".', () => {
    expect(convertHTML('<>')).toBe('&lt;&gt;')
  })

  test('convertHTML("abc") should return "abc".', () => {
    expect(convertHTML('abc')).toBe('abc')
  })
})
