export const getMessageSize = (message: string): string => {
    if (message) {
        const messageLength = message.length;

        // Define the tiers and corresponding font sizes
        const tiers = [
            { length: 10, fontSize: '12px' },
            { length: 20, fontSize: '12px' },
            { length: 30, fontSize: '10px' },
            { length: 50, fontSize: '10px' },
            { length: 70, fontSize: '9px' },
            { length: Infinity, fontSize: '8px' }
        ];

        // Find the appropriate tier based on message length
        const tier = tiers.find(({ length }) => messageLength <= length);

        // Return the font size of the tier
        return tier.fontSize;
    }

    return '12px';
};