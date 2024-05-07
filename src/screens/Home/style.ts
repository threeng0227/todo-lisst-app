import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { PADDING, SPACING, width } from 'utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: PADDING,
    marginVertical: 16
  },
  viewTask: {
    borderRadius: SPACING,
    backgroundColor: Colors.main,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    width: width - (PADDING * 2),
    height: 149,
    marginHorizontal: PADDING,
    paddingHorizontal: PADDING - 2,
    paddingVertical: PADDING / 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: PADDING
  },
  progress: {
    borderWidth: 1,
    borderColor: Colors.white,
    width: '100%',
    height: 8,
    borderRadius: 10,
    marginTop: 7
  },
  progressPosition: {
    backgroundColor: Colors.white,
    height: 8,
    borderRadius: 10,
    width: '70%',
    position: 'absolute',
    top: -1
  },
  btnDetails: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'flex-start'
  },
  category: {
    flex: 1,
    marginTop: PADDING,
    paddingHorizontal: PADDING,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: PADDING
  },
  itemCategory: {
    width: ((width - (PADDING * 2)) / 2) - PADDING,
    backgroundColor: Colors.mainOpacity,
    borderRadius: PADDING,
    paddingHorizontal: PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80
  },
  viewInfor: {
    width: '70%',
  },
  viewAvatar: {
    borderWidth: 1,
    borderColor: Colors.main,
    width: 44,
    height: 44,
    borderRadius: 44
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
