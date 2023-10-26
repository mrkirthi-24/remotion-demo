import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
export const Background: React.FC = () => {

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img
					style={{
						width: '100%',
					}}
					src={staticFile('2.png')}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
