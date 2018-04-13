import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    //TODO: Import library from vector-icons
    //Icon library creates a promise to get an icon so I use the Promise object with an array to execute Navigation
    //     after this promise will be concluded

    Promise.all([
        Icon.getImageSource("md-flash", 30),
        Icon.getImageSource("md-navigate", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "FirstTabScreen",
                    label: 'First Tab',
                    title: 'First Tab Screen',
                    icon: sources[0]
                },
                {
                    screen: "SecondTabScreen",
                    label: 'Second Tab',
                    title: 'Second Tab Screen',
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;