import { replaceContents } from './util';

const dummyTemplate = `
    //@js-data
    <!--ReactContent--></div>
`;
it('tests replaceContents', () => {
    const result = replaceContents(dummyTemplate, { jsData: 'JSText', reactApp: 'reactApp'});
    expect(result).not.toEqual(dummyTemplate);

    expect(result.indexOf('JSText')).not.toBe(-1);
    expect(result.indexOf('reactApp')).not.toBe(-1);
})