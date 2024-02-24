import MyComponent from "@/components/MyComponent/MyComponent"
import Clock from "@/components/Clock/Clock"
import Counter from "@/components/Counter/Counter"
import Conditional from "@/components/Conditional/conditional"
import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <div className={styles["page"]}>
      <MyComponent/>
      <Clock/>
      <Counter/>
      <Conditional/>
    </div>    
  );
}
