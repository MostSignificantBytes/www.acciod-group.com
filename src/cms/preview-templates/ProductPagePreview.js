import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

    const entryTestimonials = entry.getIn(['data', 'testimonials'])
    const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

    const entrySkillsList = entry.getIn(['data', 'skills', 'list'])
    const skillsList = entrySkillsList ? entrySkillsList.toJS() : []

    return (
        <ProductPageTemplate
            image={getAsset(entry.getIn(['data', 'image']))}
            title={entry.getIn(['data', 'title'])}
            intro={{ 
                heading: entry.getIn(['data', 'intro', 'heading']),
                description: entry.getIn(['data', 'intro', 'description']),
                blurbs,
            }}
            main={{
                heading: entry.getIn(['data', 'main', 'heading']),
                description: entry.getIn(['data', 'main', 'description']),
                image1: {
                    image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
                    alt: entry.getIn(['data', 'main', 'image1', 'alt']),
                },
                image2: {
                    image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
                    alt: entry.getIn(['data', 'main', 'image2', 'alt']),
                },
                image3: {
                    image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
                    alt: entry.getIn(['data', 'main', 'image3', 'alt']),
                },
            }}
            fullImage={getAsset(entry.getIn(['data', 'full_image']))}
            testimonials={testimonials}
            skills={{
                heading: entry.getIn(['data', 'skills', 'heading']),
                image: {
                    image: getAsset(entry.getIn(['data', 'main', 'image', 'image'])),
                },
                description: entry.getIn(['data', 'skills', 'description']),
                list: skillsList,
            }}
        />
    )
}

ProductPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default ProductPagePreview
