import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useClickOut } from '../../../../hooks/useClickOut'
import { NewServiceWindowContainer, NewServiceWindow } from './style'
import { Heading } from '../../../../components/style/elements/Typoghaphy/style'
import { TransparentButton } from '../../../../components/buttons/TransparentButton/style'
import { MdClear } from "react-icons/md";
import { ProjectsContext } from '../../../../context/projectsContext'
import { useState } from 'react/cjs/react.development'
import InputWrapper from '../../../../components/inputs/InputWrapper'
import formatValue from '../../../../utils/monetaryFormat'
import DefaultButton from '../../../../components/buttons/DefaultButton'

function index({clickOutCb}) {
    const newServiceWindowRef = useClickOut(() => {
        clickOutCb()
    })

    const { handleEditProject } = useContext(ProjectsContext)
    const [ costName, setCostName ] = useState('')
    const [ costValue, setCostValue ] = useState('')
    const [ invalidCostName, setInvalidCostName ] = useState(false)
    const [ invalidCostValue, setInvalidCostValue ] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (costName === "" || costValue === "") {

            if (costName === "") {
              setInvalidCostName(true)
            }
      
            if (costValue === "") {
              setInvalidCostValue(true)
            }
      
            return
          }

        console.log(costName)
        console.log(costValue)
    }

    function handleCostNameValidation(value) {
        if (value !== '') {
            setInvalidCostName(false)
        }
    }

    function handleCostValueValidation(value) {
        if (value !== '') {
            setInvalidCostValue(false)
        }
    }

    return (
        <NewServiceWindowContainer>
            <NewServiceWindow ref={newServiceWindowRef}>
                <Heading level={3}>New service</Heading>
                <TransparentButton
                    onClick={e => clickOutCb()}
                >
                    <MdClear />
                </TransparentButton>
                <form onSubmit={handleSubmit}>
                    <div>
                        <InputWrapper
                            type="text"
                            id="costName"
                            name="costName"
                            value={costName}
                            isRequired={true}
                            invalid={invalidCostName}
                            showErrorMessage={true}
                            autoFocus={true}
                            label="Cost name:"
                            onChange={e => setCostName(e.target.value)}
                            onBlur={e => handleCostNameValidation(e.target.value)}
                        />
                        <InputWrapper
                            type="text"
                            id="costValue"
                            name="costValue"
                            value={costValue}
                            isRequired={true}
                            invalid={invalidCostValue}
                            showErrorMessage={true}
                            label="Cost value:"
                            onChange={e => setCostValue(formatValue(e.target.value))}
                            onBlur={e => handleCostValueValidation(e.target.value)}
                        />
                    </div>
                    <DefaultButton
                        type="submit"
                        styleType="active"
                        cornerStyle="basic"
                    >
                        Create
                    </DefaultButton>
                </form>
            </NewServiceWindow>
        </NewServiceWindowContainer>
    )
}

index.propTypes = {
    clickOutCb: PropTypes.func.isRequired
}

export default index