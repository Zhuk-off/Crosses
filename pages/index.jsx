import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/ui-text-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      {/* <Game /> */}
      <UiTextField
        label="Lable"
        placeholder="placeholder"
        helperText="Helper text"
        required
        errorText="dfdsadf"
        
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
