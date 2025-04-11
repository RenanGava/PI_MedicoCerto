import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { theme } from "../../global/styles/theme";
import { BasicProps } from "react-native-reanimated-carousel/lib/typescript/components/Pagination/Basic";

export const Container = styled.View`
  /* height: 100%; */
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  text-align: center;
`;

export const ContainerImg = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

export const Img = styled.Image.attrs({
    resizeMode: 'contain'
    
})`
  flex:1;
`;



const configSelectImg = {
  dotStyle: {
    backgroundColor: theme.colors.green100,
    width: 50,
    borderRadius: 8
  },
  activeDotStyle: {
    backgroundColor: theme.colors.green500,
    borderRadius: 8
  },
  containerStyle: {
    gap: 5,
    marginTop: 10,
  },
};
export const SelectImage = styled(Pagination.Basic).attrs(configSelectImg)``;
