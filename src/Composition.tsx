import {AbsoluteFill} from 'remotion';
import {Background} from './Background';
import {Dot} from './Dot';
import {Explosion} from './Explosion';
import {Shrinking} from './Shrinking';
import {Trail} from './Trail';

export const MyComposition = () => {
	return (
		<AbsoluteFill>
			<Background />
			<Explosion>
				<Trail amount={10}>
					<Shrinking>
						<Dot />
					</Shrinking>
				</Trail>
			</Explosion>
		</AbsoluteFill>
	);
};
