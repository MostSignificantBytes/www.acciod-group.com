import * as React from "react";
import PropTypes from "prop-types";

const Skills = ({ data }) => (
    <div className="columns is-multiline">
        {data.map((skill) => (
            <div key={skill.name} className="column is-size-4">
                <section className="section">
                    <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                        {skill.name}
                    </h2>
                    <p className="has-text-weight-semibold">{skill.description}</p>
                    <ul>
                        {skill.items.map((item) => (
                            <li key={item} className="is-size-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        ))}
    </div>
);

Skills.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            description: PropTypes.string,
            items: PropTypes.array,
        })
    ),
};

export default Skills;
