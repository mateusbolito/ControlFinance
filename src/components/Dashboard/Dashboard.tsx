 import { Summary } from "../Summary/Summary"
import { TransitionTable } from "../TransitionTable/Transition"
import { Container } from "./styles"
export function Dashboard() {
    return(
        <Container>
          <Summary />
          <TransitionTable />
        </Container>
    )
}