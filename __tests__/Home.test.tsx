import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "@/app/page"

describe("Home", () => {
  it("renders the main content correctly", () => {
    render(<Home />)

    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument()

    expect(screen.getByText("Learn")).toBeInTheDocument()

    expect(screen.getByText("Examples")).toBeInTheDocument()
  })
})
