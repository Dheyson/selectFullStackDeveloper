import React from 'react';

import * as S from './styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../components/Layout';

const Lead = () => {
	return (
		<Layout>
			<div>
				<S.LeadWrapper>
					<S.Header>
						CMS <br />Softmakers
					</S.Header>
					<S.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate possimus perferendis? Libero id harum molestiae dolorem voluptatem reiciendis, at magni voluptatum debitis hic corporis maxime! Laudantium ut repudiandae distinctio!
					</S.Subtitle>
				</S.LeadWrapper>
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta explicabo, nemo quidem adipisci inventore sunt aliquam temporibus architecto! Sapiente earum quo minus nostrum. Enim quibusdam cupiditate fugit libero itaque.</p>
				</div>
			</div>
		</Layout>
	)
}

export default Lead;
