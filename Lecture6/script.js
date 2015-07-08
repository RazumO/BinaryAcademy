//(function () {

	function Model(student) {
		this.name = student.name;
		this.age = student.age;
		this.year = student.year;
		this.examsTaken = student.examsTaken;
		this.takeExam = student.takeExam;
		this.changed = false;
	}

	var Student = new Model({
	    name: 'Piotr',
	    age: 22,
	    year: 5,
	    examsTaken: 2,
	    takeExam: function(){
	        this.examsTaken++;
	        this.changed = true;
	    }
	});

	function Controller(inputData) {
		this.model = inputData.model;
		this.elementId = inputData.elementId;
		this.render = inputData.render;
		this.clickHandlers = inputData.clickHandlers;
		this.updateExams = inputData.updateExams;
		this.updateInfo = function () {
			var target = document.getElementById(this.elementId);
			target.innerHTML = this.render();
			count = this.clickHandlers.length;
			for(var i = 0; i < count; i++) {
				$(this.clickHandlers[0][0]).on('click', this[this.clickHandlers[0][1]].bind(this));
			}
		};
		this.check = function () {
			if(this.model.changed === true) {
				this.updateInfo();
				this.model.changed = false;
			}
		}
		this.logic = function () {
			this.updateInfo();
			setInterval(this.check.bind(this), 100);
		}
		this.logic();
	}

	var StudentController = new Controller({
	    model: Student,
	    elementId: 'student-container',
	    render: function(){
	        return '<span>' + this.model.name + ' ' + this.model.examsTaken + '</span> <button id="student-exams-button">Increase exams taken</button>';
	    },
	    clickHandlers: [
	        ['#student-exams-button', 'updateExams']
	    ],
	    updateExams: function(){
	        this.model.takeExam();
	    }
	});


