import React, {FC, InputHTMLAttributes} from 'react';
import {InputErrorMessage, InputLabel, InputWrapper, StyledTextInput } from './styled';
import {useController, UseControllerProps } from "react-hook-form";
import {BasicFormInputs} from "../../page/settings/BasicProfileCard";

type PropsT = InputHTMLAttributes<HTMLInputElement>  &  UseControllerProps<BasicFormInputs> & {
    label: string
}
const TextInput: FC<PropsT> = (props) => {
    const {label, ...restProps} = props
    const {field, fieldState} = useController(restProps)
    const {name} = field
    const { error } = fieldState
    console.log(error)
    return (
        <>
            <InputWrapper>
                <StyledTextInput
                    {...field}
                />
                <InputLabel htmlFor={name}>{ label }</InputLabel>
                <InputErrorMessage>{ error?.message }</InputErrorMessage>
            </InputWrapper>
        </>
    );
};

export default TextInput;