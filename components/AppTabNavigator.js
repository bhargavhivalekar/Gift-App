import React from "react"
import {createBottomTabNavigator} from "react-navigation-tabs"
import GiftSent from "../screens/GiftSent"
import SendGift from "../screens/SendGift"

export const AppTabNavigator = createBottomTabNavigator({
    SendGift:{
        screen: SendGift,
        navigationOptions:{
            tabBarLabel:"SendGift"
        }

    },
    GiftSent:{
        screen: GiftSent,
       navigationOptions:{
           tabBarLabel:"GiftSent"
       }
    }
})