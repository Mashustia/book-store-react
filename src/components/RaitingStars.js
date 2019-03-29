import React from 'react'
import { Rating } from 'semantic-ui-react'

const MAX_RATING = 5;

const RaitingStars = ({rating}) => <Rating icon='star' defaultRating={rating} maxRating={MAX_RATING} />;

export default RaitingStars
