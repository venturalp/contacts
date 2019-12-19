// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { type Node } from 'react'
import Grid from '../Grid'

type ButtonProps = {
  children: Node,
  appearance: string,
  icon?: Object,
  iconPosition?: string,
  outline?: Boolean,
  className?: string,
  href?: string,
  to?: string,
  onClick: () => void,
}

const Button = (props: ButtonProps) => {
  const {
    children,
    appearance = 'primary',
    icon: Icon,
    iconPosition = 'left',
    outline = false,
    className,
    href,
    to,
    onClick,
  } = props

  return (
    <div className={className} onClick={onClick}>
      <Grid justify="space-between">
        {iconPosition === 'left' && Icon && <Icon />}
        {children}
        {iconPosition === 'right' && Icon && <Icon />}
      </Grid>
    </div>
  )
}

const ButtonWrapper = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  cursor: pointer;
  display: inline-block;
  border-radius: ${props => props.theme.buttonRadius};
  box-shadow: ${props => props.theme.buttonShadow};
  border: ${props => props.theme.buttonBorder};
  padding: 12px 16px;
  ${props => {
    return css`
      padding-${props.iconPosition}: 12px;
      & svg {
        margin-${props.iconPosition === 'left' ? 'right' : 'left'}: 8px;
      }
    `
  }}
  & svg {
    width: 16px;
  }
  ${props => {
    if (props.outline) {
      return css`
        background-color: ${props.theme.bgOutButton};
        color: ${props.theme[props.appearance + 'BgButton']};
        & svg {
          fill: ${props.theme[props.appearance + 'BgButton']};
        }
      `
    } else {
      return css`
        background-color: ${props.theme[props.appearance + 'BgButton']};
        color: ${props.theme[props.appearance + 'TextButton']};
        & svg {
          fill: ${props.theme[props.appearance + 'TextButton']};
        }
      `
    }
  }}
`

export default ButtonWrapper
