import React, {useState} from 'react';
import Svg, {Polygon, Rect, Image, Path} from 'react-native-svg';

enum SvgElTypes {
  image = 'image',
  polygon = 'polygon',
  rect = 'rect',
  path = 'path',
}

interface ISvgElemntAttributes {
  width: number | undefined;
  height: number | undefined;
  src: string;
  x: number | undefined;
  y: number | undefined;
  room: number | undefined;
  points: string | undefined;
  d: string | undefined;
}

interface ISvgElemnt {
  name: string;
  attributes: ISvgElemntAttributes;
}

interface IComponentProps {
  SvgXmlString: any;
  activeId: number | undefined | string;
  activeBorderColor?: string;
  activeBorderWidth: number;
  onBottom?: boolean;
  onPress?: (id: number | undefined) => void;
  passHeight?: (height: number) => void;
}

const MapComponent: React.FC<IComponentProps> = props => {
  const [svgHeight, setSvgHeight] = useState(0);
  const svgVDoms: JSX.Element[] = [];

  const {
    SvgXmlString,
    activeId,
    activeBorderColor,
    activeBorderWidth,
    onBottom,
    passHeight,
    onPress,
  } = props;

  var xml = SvgXmlString;

  xml.children.map((element: ISvgElemnt, index: number) => {
    switch (element.name) {
      case SvgElTypes.image:
        {
          svgVDoms.push(
            <Image
              key={index}
              width={`${element.attributes.width}`}
              height={`${element.attributes.height}`}
              //@ts-ignore
              href={`${element.attributes.src}`}
            />,
          );
        }
        break;
      case SvgElTypes.rect:
        {
          svgVDoms.push(
            <Rect
              key={index}
              stroke={
                element.attributes.room === activeId
                  ? activeBorderColor
                  : '#ffffff'
              }
              strokeWidth={
                element.attributes.room === activeId ? activeBorderWidth : 0
              }
              x={`${element.attributes.x}`}
              y={`${element.attributes.y}`}
              width={`${element.attributes.width}`}
              height={`${element.attributes.height}`}
              onPress={() => onPress!(element.attributes.room)}
            />,
          );
        }
        break;
      case SvgElTypes.polygon:
        {
          svgVDoms.push(
            <Polygon
              key={index}
              stroke={
                element.attributes.room === activeId
                  ? activeBorderColor
                  : '#ffffff'
              }
              strokeWidth={
                element.attributes.room === activeId ? activeBorderWidth : 0
              }
              points={`${element.attributes.points}`}
              onPress={() => onPress!(element.attributes.room)}
            />,
          );
        }
        break;
      case SvgElTypes.path:
        {
          svgVDoms.push(
            <Path
              key={index}
              stroke={
                element.attributes.room === activeId
                  ? activeBorderColor
                  : '#ffffff'
              }
              strokeWidth={
                element.attributes.room === activeId ? activeBorderWidth : 0
              }
              d={`${element.attributes.d}`}
              onPress={() => onPress!(element.attributes.room)}
            />,
          );
        }
        break;
    }
  });

  const onLayoutRendered = (height: number) => {
    setSvgHeight(height);
    passHeight!(height);
  };

  const viewBox: string[] = xml.attributes.viewBox.split(' ');
  if (viewBox.length > 0) viewBox[1] = (-svgHeight).toString();

  return (
    <Svg
      onLayout={e => onLayoutRendered(e.nativeEvent.layout.height)}
      x={xml.attributes.x}
      y={xml.attributes.y}
      viewBox={onBottom ? viewBox.join(' ') : xml.attributes.viewBox}>
      {svgVDoms}
    </Svg>
  );
};

export default MapComponent;
