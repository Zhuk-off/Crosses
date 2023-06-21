import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/ui-text-field";
import { UiSelect } from "../components/uikit/fields/ui-selects";
import { UiSelectField } from "../components/uikit/fields/ui-select-field";

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
     <UiSelectField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="Helper text"
        options={[
          { label: "Первый label", value: 1 },
          { label: "Второй label", value: 2 },
        ]}
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
