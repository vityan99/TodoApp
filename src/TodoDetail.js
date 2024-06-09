import { useParams, Navigate } from "react-router-dom";

export default function TodoDetail(props) {
  const { key } = useParams();
  const deed = props.getDeed(key);

  if (!props.currentUser) 
    return <Navigate to="/login" replace />;
  else
    return (
      <section>
        {deed.done && <p className="has-text-success">Выполнено</p>}
        <h1 className="title">{deed.title}</h1>
        <p className="mb-3">{deed.createdAt}</p>
        {deed.desc && <p className="mb-3 subtitle">{deed.desc}</p>}
        {deed.image && (
          <p>
            <img src={deed.image} alt="Иллюстрация" />
          </p>
        )}
      </section>
    );
}
