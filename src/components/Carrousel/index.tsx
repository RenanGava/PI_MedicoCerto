import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";

import { Container, ContainerImg, Img, SelectImage } from "./styled";
import medico1 from '../../../assets/images/medico1.png'
import meidco2 from '../../../assets/images/medico2.png'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height - (Dimensions.get("window").height * 0.3);
const arrayImages = [medico1, meidco2];

export function CarouselComponent() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Container>
      <Carousel
        ref={ref}
        width={width}
        height={height}
        data={arrayImages}
        onProgressChange={progress}
        autoPlay={true}
        autoPlayInterval={2000}
        renderItem={({ item, index }) => (
          <ContainerImg>
            <Img key={index} source={item}/>
          </ContainerImg>
        )}
      />

      <SelectImage
        progress={progress}
        data={arrayImages}
        onPress={onPressPagination}
      />
    </Container>
  );
}
