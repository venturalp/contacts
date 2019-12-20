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
  disable: Boolean,
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
    disable = false,
  } = props

  return (
    <div
      className={className}
      onClick={!disable ? onClick : null}
      role="button"
      tabIndex={0}
    >
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
  cursor: ${props => (props.disable ? 'initial' : 'pointer')};
  ${props =>
    props.disable &&
    `
    opacity: ${props.theme.disableBtOpacity};
    user-select: none;
  `}
  display: inline-block;
  border-radius: ${props => props.theme.buttonRadius};
  ${props => !props.outline && `box-shadow: ${props.theme.buttonShadow};`};
  border: ${props => props.theme.buttonBorder};
  padding: 12px 16px;
  ${props =>
    props.iconPosition &&
    `
      padding-${props.iconPosition}: 12px;
      & svg {
        margin-${props.iconPosition === 'left' ? 'right' : 'left'}: 8px;
      }
    `}}
  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
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
