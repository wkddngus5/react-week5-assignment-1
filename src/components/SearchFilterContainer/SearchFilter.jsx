export default function SearchFilter({ options: { regions, categories }, value = {}, onChange }) {
  const handleChangeRegion = ({ target: { value: newRegion } }) => {
    onChange({
      ...value,
      region: newRegion,
    });
  };

  const handleChangeCategory = ({ target: { value: newCategory } }) => {
    onChange({
      ...value,
      category: newCategory,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="region">지역</label>
        <select id="region" value={value.region} onChange={handleChangeRegion}>
          {regions.map(({ id, name }) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="category">분류</label>
        <select id="category" value={value.category} onChange={handleChangeCategory}>
          {categories.map(({ id, name }) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>
    </form>
  );
}