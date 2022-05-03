import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'
import { transparentize } from 'polished'
interface ProgressBarBaseProps {
  $percent: number
  $bgColor?: keyof typeof colors
}

export const ProgressBarBase = styled(Box)<ProgressBarBaseProps>`
  position: relative;
  height: 22px;
  width: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        transparent,
        transparent 60%,
        ${({ theme, $bgColor }) => theme.rawColors[$bgColor || 'grey-800']} 60%,
        ${({ theme, $bgColor }) => theme.rawColors[$bgColor || 'grey-800']} 100%
      ),
      linear-gradient(
        0deg,
        ${({ theme }) => transparentize(0.65, theme.rawColors.blue)} 0%,
        ${({ theme }) => transparentize(0.65, theme.rawColors.blue)} 100%
      );
    background-size: 12px 100%, 100% 100%;
    border: none;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: ${({ $percent }) => $percent + '%'};
    background-image: linear-gradient(
        90deg,
        transparent,
        transparent 60%,
        ${({ theme, $bgColor }) => theme.colors[$bgColor || 'grey-800']} 60%,
        ${({ theme, $bgColor }) => theme.colors[$bgColor || 'grey-800']} 100%
      ),
      linear-gradient(-2deg, #3e8ff7 15%, #ec5b94 65%, #ff5628 90%);
    background-size: 12px 100%, 100% 100%;
    border: none;
  }
`
