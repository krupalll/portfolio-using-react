import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import { Wrapper } from './Style'

const Skills = () => {
  return (
    <Wrapper>
            <section className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">
                My Technical Level
            </span>

            <div className="skills__container container ">
                <Frontend/>
                <Backend/>
            </div>
            </section>
    </Wrapper>
  )
}

export default Skills
