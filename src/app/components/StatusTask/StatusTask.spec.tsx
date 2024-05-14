import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import StatusTask from './StatusTask'

describe('StatusTask', () => {
  it('should render the correct status text and color based on the status prop', () => {
    const { getByText } = render(<StatusTask status={0} />)
    expect(getByText('Pending')).toBeInTheDocument()

    const { getByText: getByText1 } = render(<StatusTask status={1} />)
    expect(getByText1('In Progress')).toBeInTheDocument()

    const { getByText: getByText2 } = render(<StatusTask status={2} />)
    expect(getByText2('Completed')).toBeInTheDocument()
  })
})
