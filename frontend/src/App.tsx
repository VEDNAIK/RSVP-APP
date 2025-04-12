import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RSVP_Form from './components/RSVP_Form';
import RsvpList from './components/RSVP_List';
import RsvpSummary from './components/RSVP_Summary';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1><center>📝 RSVP App</center></h1>
      <RSVP_Form />
      <RsvpSummary />
      <RsvpList />
    </QueryClientProvider>
  );
}

export default App;