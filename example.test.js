jest.mock('@splitsoftware/splitio-react-native', () => {
    const splitio = jest.requireActual('@splitsoftware/splitio-react-native');

    return {
        ...splitio,
        SplitFactory: () => {
            return splitio.SplitFactory({
                core: {
                    authorizationKey: 'localhost',
                },
                features: {
                    // none for example
                },
                sync: {
                    localhostMode: splitio.LocalhostFromObject(),
                },
            });
        },
    };
});

const {
    SplitFactory,
    LocalhostFromObject,
} = require('@splitsoftware/splitio-react-native');

function initSplit() {
    const splitFactory = SplitFactory({
        core: {
            authorizationKey: 'localhost',
        },
        features: {},
        sync: {
            localhostMode: LocalhostFromObject(),
        },
    });
}

describe('test', () => {
    it('will fail to exit one second after test run has completed', () => {
        initSplit();
    })
})
