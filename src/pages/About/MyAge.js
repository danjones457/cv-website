function MyAge() {
    var diff_ms = Date.now() - Date.parse("08 Nov 1997");
    var age_dt = new Date(diff_ms);
  
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);

    return <span className="text-green">{age} years old</span>
};

export default MyAge;