import { Project } from "./projectState";

export default function projectItem(project: Project) {
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  h2.innerHTML = project.title;
  h3.innerHTML = project.description;
  p.innerHTML = persons(project.people) + " assigned";
  li.appendChild(h2);
  li.appendChild(h3);
  li.appendChild(p);
  li.id = "" + project.id;
  li.draggable = true;
  function persons(num: number) {
    if (num === 1) return "1 person";
    return `${num} persons`;
  }
  function dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", "" + project.id);
    event.dataTransfer!.effectAllowed = "move";
  }
  function dragEndHandler(_: DragEvent): void {}
  function configure() {
    li.addEventListener("dragstart", dragStartHandler);
    li.addEventListener("dragend", dragEndHandler);
  }
  configure();
  return li;
}
