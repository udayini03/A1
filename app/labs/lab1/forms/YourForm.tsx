export default function YourForm() {
    return (
    <form id="wd-your-form">
        <label htmlFor="wd-first-name">First Name</label>
        <br />
        <input id="wd-first-name" type="text" />
        <br />
        <label htmlFor="wd-last-name">Last Name</label>
        <br />
        <input id="wd-last-name" type="text" />
        <br />
        <label htmlFor="wd-id">Student ID</label>
        <br />
        <input id="wd-id" type="text" />
        <br />
        <label htmlFor="wd-bio">Why I&apos;m taking this course</label>
        <br />
        <textarea id="wd-bio" cols={40} rows={4} />
        <br />
        <fieldset>
        <legend>Class Standing</legend>
        <input type="radio" id="wd-standing-freshman" name="standing" value="FRESHMAN" />
        <label htmlFor="wd-standing-freshman">Freshman</label>
        <br />
        {/* repeat for Sophomore, Junior, Senior, Graduate — same name="standing" */}
        <input type="radio" id="wd-standing-sophomore" name="standing" value="SOPHOMORE" />
        <label htmlFor="wd-standing-sophomore">Sophomore</label>
        <br />
        <input type="radio" id="wd-standing-junior" name="standing" value="JUNIOR" />
        <label htmlFor="wd-standing-junior">Junior</label>
        <br />
        <input type="radio" id="wd-standing-senior" name="standing" value="SENIOR" />
        <label htmlFor="wd-standing-senior">Senior</label>
        <br />
        <input type="radio" id="wd-standing-graduate" name="standing" value="GRADUATE" />
        <label htmlFor="wd-standing-graduate">Graduate</label>
        <br />
        <fieldset>
            <legend>Attendance</legend>
            <input type="radio" id="wd-full-time" name="attendance" value="FULL-TIME" />
            <label htmlFor="wd-full-time">Full-time</label>
            <br />
            <input type="radio" id="wd-part-time" name="attendance" value="PART-TIME" />
            <label htmlFor="wd-part-time">Part-time</label>
            <br />
            <input type="radio" id="wd-on-campus" name="attendance" value="ON-CAMPUS" />
            <label htmlFor="wd-on-campus">On-campus</label>
            <br />
            <input type="radio" id="wd-commuter" name="attendance" value="COMMUTER" />
            <label htmlFor="wd-commuter">Commuter</label>
        </fieldset>

        </fieldset>
        <br />
        <input type="checkbox" id="wd-interest-react" />
        <label htmlFor="wd-interest-react">React</label>
        <br />
        <input type="checkbox" id="wd-interest-python" />
        <label htmlFor="wd-interest-python">Python</label>
        <br />
        <input type="checkbox" id="wd-interest-java" />
        <label htmlFor="wd-interest-java">Java</label>
        <br />
        <br />
        <label htmlFor="wd-major">Major</label>
        <br />
        <select id="wd-major">
        <option value="CS">Computer Science</option>
        <option value="MATH">Mathematics</option>
        <option value="BIO">Biology</option>
        </select>
        <br />
        <label htmlFor="wd-topics">Topics of Interest</label>
        <br />
        <select id="wd-topics" multiple>
        <option value="GRAPHQL" selected>GraphQL</option>
        <option value="AI" selected>AI</option>
        <option value="SECURITY">Security</option>
        <option value="CLOUD">Cloud</option>
        </select>
        <br />
        <label htmlFor="wd-grad-year">Graduation Year</label>
        <br />
        <input id="wd-grad-year" type="number" min={2026} max={2032} />
        <br />
        <label htmlFor="wd-start-date">Start Date</label>
        <br />
        <input id="wd-start-date" type="date" />
        <br />
        <label htmlFor="wd-excitement">Excitement: <output>7</output>/10</label>
        <br />
        <input id="wd-excitement" type="range" min={0} max={10} />
        <br />
        <br />
        <button id="wd-save" type="submit">Save</button>
        <button id="wd-cancel" type="button">Cancel</button>
    </form>
    );
}
