import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    //TODO: Import library from vector-icons
    //Icon library creates a promise to get an icon so I use the Promise object with an array to execute Navigation
    //     after this promise will be concluded

    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "FindPlaceScreen",
                    label: 'Find Place',
                    title: 'Find Place',
                    icon: sources[0]
                },
                {
                    screen: "SharePlaceScreen",
                    label: 'Share Place',
                    title: 'Share Place',
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;