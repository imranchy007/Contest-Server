from app import app, db

class Team(db.Document):

    MAX_NAME_LENGTH = 30

    teamName = db.StringField()

    # For joining the team in the db
    teamID    = db.StringField(required=True, unique=True)
    teamPass  = db.StringField(required=True)

    # Password for domjudge
    domPass   = db.StringField(required=True)

    # List of participants on team
    members = db.ListField(db.ReferenceField('Account'), null=True)

    # Block editing
    shadowban = db.BooleanField()



    def __repr__(self):
        if self.teamName is not None:
            return '<Team %r>' % self.teamName
        else:
            return super(Team, self).__repr__()

    # def csv(self, include_students=False):
    #
    #     part1 = "{0},{1},{2}".format(self.domuser, self.dompass,
    #         self.team_name.encode('utf-8'))
    #
    #     if include_students:
    #         for student in self.students:
    #             part1+=(","+str(student.fsuid))
    #
    #     return part1


# Pre generate teams
if Team.objects.count() < app.config['TEAM_COUNT']:
    from app.util.password import make_password
    target = app.config['TEAM_COUNT']

    # Don't overwrite teams
    start = Team.objects.count()

    for i in range(start, target):
        teamID = "acm-%i" % i
        teamPass = make_password()
        domPass = make_password()

        Team(teamID=teamID, teamPass=teamPass, domPass=domPass).save()
