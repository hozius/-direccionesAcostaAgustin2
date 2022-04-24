import { StyleSheet } from "react-native";
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: COLORS.primaryColor,
        borderBottomWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: '98%',
        height: '30%',
        marginBottom: 2,
      },
      details: {
        marginLeft: 15,
        marginTop: 8,
        flex: 1,
        alignItems: 'flex-start',
      },
      name: {
        color: COLORS.primaryColor,
        fontSize: 18,
        marginBottom: 2,
        fontWeight:'bold',
        marginLeft: 15,
      },
      address: {
        color: COLORS.textColor,
        marginTop: 8,
        fontSize: 16,
        fontWeight:'bold',
        marginLeft: 15,
      },
      preview: {
        width: '98%',
        marginTop: 16,
        height: 200,
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primaryColor,
        borderWidth: 1,
      },
})
