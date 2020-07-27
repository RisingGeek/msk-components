import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
    theme: {
        name: 'Theme',
        type: propertyTypes.THEME,
        value: themes.dark.midnightBlue,
        required: true
    },
    headlineText: {
        name: 'Headline text',
        type: propertyTypes.STRING,
        value: 'Honours and Awards',
        required: true
    },
    honoursAwards: {
        name: 'HonoursAndAwards',
        type: propertyTypes.ARRAY,
        value: [
            {
                name: 'HonourAndAward',
                type: propertyTypes.STRING_MULTI_LINE,
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                required: true
            },
            {
                name: 'HonourAndAward',
                type: propertyTypes.STRING_MULTI_LINE,
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                required: true
            },
            {
                name: 'HonourAndAward',
                type: propertyTypes.STRING_MULTI_LINE,
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                required: true
            },
        ],
        required: true
    }
};

export default properties;