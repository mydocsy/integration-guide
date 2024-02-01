import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon(props) {
  return (
    <Svg
      width={27}
      height={17}
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.837 13.399c-.149 0-.297-.031-.431-.093a.995.995 0 01-.349-.261L.227 7.302A.932.932 0 010 6.695c0-.222.08-.436.227-.608l5-5.741a1.032 1.032 0 011.41-.124.93.93 0 01.13 1.35l-4.47 5.128 4.32 5.13a.92.92 0 01.135 1.024.972.972 0 01-.374.4c-.162.097-.35.147-.54.145z"
        fill={props.color}
      />
    </Svg>
  );
}

export default BackIcon;
