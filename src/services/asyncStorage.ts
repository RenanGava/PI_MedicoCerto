import AsyncStorage from '@react-native-async-storage/async-storage'


type KeyTypes = '@JWT' | '@RFTonken'

export async function setItem(key: KeyTypes, value: any){
    await AsyncStorage.setItem(key, JSON.stringify(value))
}


export async function getItem(key: KeyTypes){
    const item = await AsyncStorage.getItem(key)
    return item
}

export async function LogOut(){
    const keys = await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys)
}