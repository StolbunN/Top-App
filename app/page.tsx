import { Headling, Button } from "@/components";


export default function Home() {
  return (
    <div>
      <Headling tag="h1">Привет, Мир!</Headling>
      <Headling tag="h2">Привет, Мир!</Headling>
      <Headling tag="h3">Привет, Мир!</Headling>
      <Button appearance="primary">Primary</Button>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="primary" arrow="down">Primary</Button>
      <Button>Ghost</Button>
      <Button arrow="right">Ghost</Button>
      <Button arrow="down">Ghost</Button>
    </div>
  );
}
