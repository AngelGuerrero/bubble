import styled from 'styled-components'
import tw from 'tailwind.macro';

export const Button = styled.button(props => [
  // Base
  tw` border
      border-solid
      border-gray-300
      rounded
      text-white
      shadow-2xl
      py-4
      px-5
      bg-blue-500
      hover:bg-blue-400
    `,
    // Props
    props.error && tw`bg-red-500 hover:bg-red-400`,
    props.success && tw`bg-green-500 hover:bg-green-400`
  ])