/**
 * @overview Photos List.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Component
import Photo from '../photo/Photo'

const PhotosList = props => {
	const photos = props.photos
	return (
		<div className="photos-list-wrapper">
			{photos.map(photo =>
				<Photo key={photo.id}
					id={photo.id}
					imageUrl={photo.imageUrl}
					title={photo.title}
					detail={photo.detail} />
			)}
		</div>
	)
}

PhotosList.propTypes = {
	photos: PropTypes.array.isRequired
}

export default PhotosList